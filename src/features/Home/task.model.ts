/* npm imports: common */
import { observable, action } from 'mobx';
// import { format } from 'date-fns';

import { BaseStore } from 'config/base-store';

export class TaskModel extends BaseStore {
	public readonly id: string = '';
	public readonly description: string = '';
	public readonly completed: boolean = false;
	public readonly createdAt: string = '';
	public readonly updatedAt: string = '';

	public constructor(props: Partial<TaskType>) {
		super();

		if (props._id) this.id = props._id;
		if (props.description) this.description = props.description;
		if (props.completed) this.completed = props.completed;
		if (props.createdAt) this.createdAt = props.createdAt;
		if (props.updatedAt) this.updatedAt = props.updatedAt;
	}

	@observable public updateInProgress: boolean = false;
	@observable public deleteInProgress: boolean = false;

	// @computed public get created_at() {
	// 	return format(this.createdAt, 'D MMMM, YYYY HH:mm:ss');
	// }

	@action public setActionInProgress = (action: TaskActionInProgress, state: boolean) => {
		try {
			if (!action) throw Error('action not found');
			this[action] = state;
		} catch (e) {
			console.error(e);
		}
	};
}
