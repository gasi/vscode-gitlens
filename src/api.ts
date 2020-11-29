'use strict';
import { Disposable } from 'vscode';
import { Action, ActionContext, ActionRunner } from './api/actionRunners';
import { Container } from './container';

export interface API {
	// registerRemoteProvider(matcher: string | RegExp, provider: RemoteProvider | RichRemoteProvider): Disposable;
	// registerAutolinkProvider(provider: RemoteProvider): Disposable;
	// registerPullRequestProvider(provider: RemoteProvider): Disposable;
	registerActionRunner<T extends ActionContext>(action: Action<T>, runner: ActionRunner): Disposable;
}

export class GitLensApi implements API {
	// registerRemoteProvider(_matcher: string | RegExp, _provider: RemoteProvider | RichRemoteProvider): Disposable {
	// 	// eslint-disable-next-line @typescript-eslint/no-empty-function
	// 	return { dispose: () => {} };
	// }

	registerActionRunner<T extends ActionContext>(action: Action<T>, runner: ActionRunner): Disposable {
		return Container.actionRunners.register(action, runner);
	}
}
