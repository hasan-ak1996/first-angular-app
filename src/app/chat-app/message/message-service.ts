import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { Subject, Observable } from 'rxjs';
import { scan, publishReplay, refCount, map, filter } from 'rxjs/operators';
import 'rxjs/add/operator/publishReplay';
import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';



const initialMessages: Message[] = [];


interface IMessagesOperation extends Function {
    (messages: Message[]): Message[];
  }

@Injectable()
export class MessageService {
    // a stream that publishes new messages only once
    newMessages :Subject<Message> = new Subject<Message>();

    // `messages` is a stream that emits an array of the most up to date messages
    messages: Observable<Message[]>;

    // `updates` receives _operations_ to be applied to our `messages`
    // it's a way we can perform changes on *all* messages (that are currently
    // stored in `messages`)
    updates: Subject<any> = new Subject<any>();

    // action streams
    create: Subject<Message> = new Subject<Message>();
    markThreadAsRead: Subject<any> = new Subject<any>();

    constructor() {
            this.messages = this.updates.pipe(
        // watch the updates and accumulate operations on the messages
        scan((messages: Message[],
                operation: IMessagesOperation) => {
                return operation(messages);
                },
                initialMessages),
        // make sure we can share the most recent list of messages across anyone
        // who's interested in subscribing and cache the last known list of
        // messages
        publishReplay(1),
        refCount());

            this.create.pipe(
        map( function(message: Message): IMessagesOperation {
            return (messages: Message[]) => {
            return messages.concat(message);
            };
        }))
        .subscribe(this.updates);

        this.newMessages
        .subscribe(this.create);

        // similarly, `markThreadAsRead` takes a Thread and then puts an operation
        // on the `updates` stream to mark the Messages as read
        this.markThreadAsRead.pipe(
        map( (thread: Thread) => {
        return (messages: Message[]) => {
            return messages.map( (message: Message) => {
            // note that we're manipulating `message` directly here. Mutability
            // can be confusing and there are lots of reasons why you might want
            // to, say, copy the Message object or some other 'immutable' here
            if (message.thread.id === thread.id) {
                message.isRead = true;
            }
            return message;
            });
        };
        }))
        .subscribe(this.updates);
        
    }
    // an imperative function call to this action stream
    addMessage(message: Message): void {
        this.newMessages.next(message);
    }
    
    messagesForThreadUser(thread: Thread, user: User): Observable<Message> {

        return this.newMessages.pipe(
        filter((message: Message) => {
                // belongs to this thread
            return (message.thread.id === thread.id) &&
                // and isn't authored by this user
                (message.author.id !== user.id);
        }));
    }

}
