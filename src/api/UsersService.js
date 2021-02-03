import { ApiConnection } from "./api";

/**
 * ������ ��� ������ � ��������������.
 */
class UserService {
    getAll () {
        return ApiConnection.get('Contact')
    }

    get (id) {
        return ApiConnection.get(`Contact/${id}`)
    }

    create (user) {
        return ApiConnection.post('Contact', user)
    }

    delete (id) {
        return ApiConnection.delete(`Contact/${id}`)
    }
}

export default new UserService()