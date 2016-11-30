import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { ActionID } from './../action/ActionID';
import { AuthenticationActions } from './../../flux/action/AuthenticationActions';
import { EventsSync } from './../../engine/EventsSync';

class AuthenticationStore extends EventEmitter {
    AUTHENTICATION_EVENT: string = "user_authentication_change";

    username: string = null;
    password: string = null;
    authenticated: boolean = null;

    static loginStoreInstance: AuthenticationStore;
    static getInstance(): AuthenticationStore {
        if (!this.loginStoreInstance) {
            this.loginStoreInstance = new AuthenticationStore();
        }
        return this.loginStoreInstance
    }

    constructor() {
        super();
        registerToDispatcher();
        this.isUserAuthenticated = this.isUserAuthenticated.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.getUsername = this.getUsername.bind(this);
    }

    //
    emitAuthenticationEvent() {
        this.emit(this.AUTHENTICATION_EVENT);
    }

    addAuthenticationChangeListener(callback: Function): ListenerToken {
        this.addListener(this.AUTHENTICATION_EVENT, callback);
        return new ListenerToken(this.AUTHENTICATION_EVENT, callback);
    }

    //eventsMethods
    authenticate(username: string, password: string){
        console.log("Trying to authenticatie user: " + username + ", with password: " + password);
        this.username = username;
        this.password = password;
        this.authenticated = true;
    }

    logOut(){
        this.username = null;
        this.password = null;
        this.authenticated = null;
    }


    /*returns events for specified by dayTime day*/
    isUserAuthenticated(): boolean {
        return this.authenticated;
    }
    getUsername(): string {
        return this.username;
    }
    getPassword(): string {
        return this.password;
    }
}

function registerToDispatcher() {
    AppDispatcher.getInstance().register(function (action: AuthenticationAction) {
        switch (action.actionType) {
            case ActionID.AUTHENTICATION_LOG_IN:
                AuthenticationStore.getInstance().authenticate(action.payload.username, action.payload.password);
                //call after fetch
                AuthenticationStore.getInstance().emitAuthenticationEvent();
                break;
            default:
        }
    });

    AppDispatcher.getInstance().register(function (action: AuthenticationAction) {
        switch (action.actionType) {
            case ActionID.AUTHENTICATION_LOG_OUT:
                AuthenticationStore.getInstance().logOut();
                AuthenticationStore.getInstance().emitAuthenticationEvent();
                break;
        }
    });
}

export { AuthenticationStore };