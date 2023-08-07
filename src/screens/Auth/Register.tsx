import useAuth from 'hooks/useAuth';
import Input from 'components/Input';
import { REGISTER } from 'constants/auth';
import Button from 'components/Button';
import { AuthFormType, IAuthType } from 'types/auth';
import { Apple, Facebook, Google } from 'assets/svgs';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

const Register = () => {
  const { control, handleSubmit } = useForm<IAuthType>();
  const { register, googleLogin, facebookLogin } = useAuth();

  const onSubmit: SubmitHandler<IAuthType> = async (data) => {
    await register(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {REGISTER.map((item: AuthFormType) => {
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
        <div className='flex justify-start mb-2'>
          <p className='text-xs md:text-sm font-semibold text-slate-500 text-justify'>
            By creating an account, you agree to our Terms of Service and
            Privacy & Cookie Statement.
          </p>
        </div>
        <div className='flex justify-center'>
          <div>
            <Button
              gradient
              btnText='Create Account'
              className='text-white w-[300px] md:w-[550px] rounded-lg'
            />
          </div>
        </div>
      </form>
      <div className='flex justify-center'>
        <div className='w-full md:w-1/2'>
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
        <div className='w-full md:w-1/2 flex space-x-4 mb-6'>
          <Button
            icon={<Google />}
            className='rounded-lg w-44 flex items-center justify-center'
            onClick={googleLogin}
          />
          <Button
            icon={<Apple />}
            className='rounded-lg w-44 flex items-center justify-center'
          />
          <Button
            icon={<Facebook />}
            className='rounded-lg w-44 flex items-center justify-center'
            onClick={facebookLogin}
          />
        </div>
      </div>
    </>
  );
};
export default Register;
