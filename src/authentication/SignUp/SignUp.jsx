import { Button, Input } from "antd";
import scss from "./SignUp.module.scss";
import { GoogleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAuth } from "../../store/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { singUpWithGoogle, register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={scss.signUp}>
      <div className="container">
        <div className={scss.content}>
          <h1>Sign Up</h1>
          <div className={scss.inputs}>
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              variant="underlined"
              value={name}
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              variant="underlined"
              value={email}
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              variant="underlined"
              value={password}
            />
            <Button
              onClick={() => register(name, email, password)}
              className={scss.btn}
            >
              Sign Up
            </Button>
            <Button
              onClick={() => singUpWithGoogle()}
              className={scss.btnGoogle}
              icon={<GoogleOutlined />}
            >
              Sign Up With Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
