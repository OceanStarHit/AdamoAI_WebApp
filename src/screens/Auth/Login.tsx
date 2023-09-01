import React from 'react';
import useAuth from 'hooks/useAuth';
import Input from 'components/Input';
import { LOGIN } from 'constants/auth';
import Button from 'components/Button';
import { ROUTES } from 'constants/routes';
import { useNavigate } from 'react-router-dom';
import { AuthFormType, IAuthType } from 'types/auth';
import { Apple, Facebook, Google } from 'assets/svgs';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const { control, handleSubmit } = useForm<IAuthType>();
  const { login, googleLogin, facebookLogin } = useAuth();

  const onSubmit: SubmitHandler<IAuthType> = async (data) => {
    await login(data, setLoading);
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        {LOGIN.map((item: AuthFormType) => {
          return (
            <div className='flex flex-col items-center' key={item.label}>
              <Controller
                name={item.name as keyof IAuthType}
                control={control}
                rules={item.rules}
                render={({
                  field: { name, value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    icon={item.icon}
                    name={name}
                    type={item.name}
                    placeholder={item.placeholder}
                    className='!w-[300px] md:!w-[550px] h-14'
                    label={item.label}
                    onChange={onChange}
                    value={value}
                    error={error?.message}
                  />
                )}
              />
            </div>
          );
        })}

        <div
          className='flex justify-end mb-2'
          onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
        >
          <p className='text-sm font-semibold text-slate-500 cursor-pointer'>
            Forgot Password?
          </p>
        </div>
        <div className='flex justify-center'>
          <div>
            <Button
              type='submit'
              gradient
              btnText='Sign In'
              className='text-white w-[300px] md:w-[550px] rounded-lg font-semibold'
              loading={loading}
              disabled={loading}
            />
          </div>
        </div>
      </form>
      <div className='flex justify-center'>
        <div className='w-full'>
          <div className='relative flex py-5 items-center'>
            <div className='flex-grow border-t border-gray-400'></div>
            <span className='flex-shrink mx-4 text-gray-400'>
              or continue with
            </span>
            <div className='flex-grow border-t border-gray-400'></div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-full flex space-x-4 mb-6'>
          <Button
            icon={<Google />}
            className='rounded-lg w-44 flex items-center justify-center border-2 border-slate-300'
            onClick={googleLogin}
          />
          <Button
            icon={<Apple />}
            className='rounded-lg w-44 flex items-center justify-center border-2 border-slate-300'
          />
          <Button
            icon={<Facebook />}
            className='rounded-lg w-44 flex items-center justify-center border-2 border-slate-300'
            onClick={facebookLogin}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
