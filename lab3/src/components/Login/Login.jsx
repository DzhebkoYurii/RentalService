import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      alert("Помилка входу: " + err.message);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault(); 
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      alert("Google-вхід помилка: " + err.message);
    }
  };

  return (
    <div className='login_container'>
            <h1 className='title'>Увійдіть в профіль</h1>

            <div className='login_form_container'>
                <div className='left'>
                    <form className='form_container' onSubmit={handleLogin}>
                        <p className='upperinput_text'>Електронна пошта</p>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={e => setEmail(e.target.value)} 
                            required
                            className='input'
                        />
                        <p className='upperinput_text'>Пароль</p>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={e => setPassword(e.target.value)} 
                            required
                            className='input'
                        />

                        <button className="google_login" onClick={handleGoogleLogin}>Увійти через Google</button>

                        <button type="submit" className='submit'>
                            Увійти
                        </button>
                    </form>
                </div>
                <div className='down'>
                    <p>Ще не маєте акаунта? </p>
                    <Link className='white_btn' to="/register">
                            Зареєструватися
                    </Link>
                </div>
            </div>
        </div>
  );
}
