import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './loginForm.css';

function LoginForm() {
    const [isDirector, setIsDirector] = useState(false);
    const [name, setName] = useState('');
    const navigate = useNavigate();


    const handleLogin = () => {
        console.log(`${name} is a ${isDirector ? 'director' : 'user'}.`)
        if (isDirector) {
            navigate('/admin');
        } else {
            navigate('/user');
        }
    }

    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <FormGroup>
                        <TextField 
                            id="outlined-basic" 
                            label="Name" 
                            value={name} 
                            variant="outlined"
                            onChange={ e => setName(e.target.value) } />
                        <FormControlLabel 
                            control={<Checkbox value={isDirector} 
                            onChange={e => setIsDirector(e.target.checked)} />}
                            label="Director" />
                        <Button 
                            variant="contained" 
                            onClick={handleLogin}>Login</Button> 
                    </FormGroup>
                </div>
            </div>
        </>
    );
}

export default LoginForm;