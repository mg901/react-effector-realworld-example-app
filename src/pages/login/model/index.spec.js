import { root, fork, allSettled } from 'effector-root';
import { $user, $token, $isAuthorized } from 'modules/user/model';
import { signInFx } from './index';

describe('pages/login: ', () => {
  it('should sign in via email and password', async () => {
    const expected = {
      bio: '',
      createdAt: '',
      email: '',
      id: '1',
      image: '',
      token: 'token',
      updatedAt: '',
      username: 'John Doe',
    };

    const singInFxMock = jest.fn(() => expected);

    const scope = fork(root, {
      handlers: new Map().set(signInFx, singInFxMock),
    });

    expect(scope.getState($isAuthorized)).toBeFalsy();

    await allSettled(signInFx, { scope });

    expect(scope.getState($user)).toMatchObject(expected);
    expect(scope.getState($token)).toBe(expected.token);
    expect(scope.getState($isAuthorized)).toBeTruthy();
  });
});