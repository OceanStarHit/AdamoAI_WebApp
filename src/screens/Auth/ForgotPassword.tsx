import AuthLayout from './Layout';
import Input from 'components/Input';
import Button from 'components/Button';
import Heading from 'components/Heading';
import { emailRule } from 'constants/auth';
import { IForgotPassword } from 'types/auth';
import { BackArrow, Email } from 'assets/svgs';
import { useNavigate } from 'react-router-dom';
import MainContainer from 'components/MainContainer';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<IForgotPassword>();

  const onSubmit: SubmitHandler<IForgotPassword> = (data) => {
    console.log(data);
  };
  return (
    <AuthLayout>
      <MainContainer>
        <div className='flex flex-col w-full min-h-[calc(100vh-2rem)]'>
          <div className='border-b border-gray-300 flex w-full h-20'>
            <div
              className='flex justify-start space-x-2 items-center ml-2 cursor-pointer'
              onClick={() => navigate(-1)}
            >
              <BackArrow />
              <p className='text-xl text-black font-medium'>Forgot Password</p>
            </div>
          </div>
          <div className='flex justify-center items-center min-h-[calc(100vh-10rem)]'>
            <div className='flex flex-col items-center md:items-baseline'>
              <Heading
                text='Reset your password'
                type='heading'
                className='font-helvetica'
              />
              <p className='text-gray-500 mb-10 text-center md:text-justify'>
                Enter your email address to recover your password.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name='email'
                  control={control}
                  rules={emailRule}
                  render={({
                    field: { name, value, onChange },
                    fieldState: { error },
                  }) => (
                    <Input
                      icon={<Email />}
                      type='email'
                      placeholder='Enter your email'
                      className='w-[300px] md:!w-[400px] h-14'
                      label='Email'
                      error={error?.message}
                      name={name}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <Button
                  gradient
                  btnText='Reset Password'
                  className='text-white w-[300px] md:w-[400px] rounded-lg'
                  type='submit'
                />
              </form>
            </div>
          </div>
        </div>
      </MainContainer>
    </AuthLayout>
  );
};
export default ForgotPassword;
