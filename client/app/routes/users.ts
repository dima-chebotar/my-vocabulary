import Route from '@ember/routing/route';
import type { Responce } from 'client/types/user.type';

const URL = 'http://localhost:3000/api/v1/users';
export default class UsersRoute extends Route {
  async model({ id }: { id: string }): Promise<Responce> {
    const response = await fetch(`${URL}/${id}`);
    return await response.json();
  }
}
