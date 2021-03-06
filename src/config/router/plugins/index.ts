/* npm imports: common */
import { PluginFactory, Plugin, Router, State } from 'router5';

/* root imports: common */
import { routerStore } from 'config/router/store';

const factory = (_router: Router): Plugin => {
	return {
		onTransitionError: (_nextState: State, _prevState: State, _error: any) => {
			// console.error(error);
		},

		onTransitionSuccess: (nextState: State) => {
			routerStore.setCurrent(nextState);
		},
	};
};

const mobxRouterPlugin = factory as PluginFactory;

export { mobxRouterPlugin };
