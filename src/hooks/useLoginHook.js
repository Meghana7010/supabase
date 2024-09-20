import { useDispatch, useSelector } from 'react-redux';
import { login, selectAuthenticated, selectUser } from '../redux/userSlice';
import { supabase } from '../utils/superbase';

const useLoginHook = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const user = useSelector(selectUser);

  const onLogin = async (name, email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
    //   console.log(data)



      if (data && data.session && data.user) {
        const { access_token } = data.session;
        const { id, user_metadata } = data.user;

        dispatch(
          login({
            token: access_token,
            id: id,
            name: user_metadata?.name || name, 
          })
        );
      } else {
        alert('Incorrect Login or Password', data);
      }
    } catch (error) {
      alert('Login error:', error);
    }
  };

  return {
    authenticated,
    name: user ? user.name : null,
    onLogin,
  };
};

export default useLoginHook;
