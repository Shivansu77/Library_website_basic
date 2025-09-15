import { LibraryApplicationbackend } from "./LibraryApplicationbackend";
const loginUser = async ({email, password}) => {
    const {data} = await LibraryApplicationbackend.post('/api/users/login', {email, password});
}
const signupUser = async ({name, email, password}) => {
    const {data} = await LibraryApplicationbackend.post('/api/users/signup', {name, email, password});
}
export {loginUser};