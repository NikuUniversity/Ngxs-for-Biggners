import { State, Action } from '@ngxs/store';
import { StateRepository, DataAction } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';

export class Add {
  static readonly type = 'Add';
}

@StateRepository()
@State<number>({
  name: 'count',
  defaults: 0,
})
export class CountState extends NgxsDataRepository<number> {
  @DataAction() add() {
    this.ctx.setState((state) => state + 1);
  }
}
