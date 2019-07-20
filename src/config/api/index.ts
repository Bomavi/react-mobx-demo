/* root imports: common */
import { ApiClient } from 'config/axios/api-client';

/* local imports: common */
import { TasksApi } from './tasks';

export class Api {
	public req: ApiClient;
	public tasks: TasksApi;

	public constructor(apiPrefix: string) {
		if (!apiPrefix) {
			throw new Error('[apiPrefix] required');
		}

		this.req = new ApiClient({ apiPrefix });
		this.tasks = new TasksApi(this.req);
	}
}
