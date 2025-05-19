import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import './Register.css'
import { onAuthStateChanged } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); 
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      alert("Помилка реєстрації: " + err.message);
    }
  };
  

  return (
    <div className='login_container'>
            <h1 className='title'>Зареєструйтеся</h1>

            <div className='login_form_container'>
                <div className='left'>
                    <form className='form_container' onSubmit={handleRegister}>
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

                        <button type="submit" className='submit'>
                            Зареєструватися
                        </button>
                    </form>
                </div>
                <div className='down'>
                    <p>Вже маєте акаунт? </p>
                    <Link className='white_btn' to="/login">
                            Увійти
                    </Link>
                </div>
            </div>
        </div>
  );
}
