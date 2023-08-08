import React from 'react';
import Input from 'components/Input';
import { Avatar } from 'assets/svgs';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import { ISettingType } from 'types/settings';
import useLayoutContext from 'hooks/useLayout';
import { EDIT_PROFILE } from 'constants/settings';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

const EditProfile = () => {
  const { control, handleSubmit } = useForm<ISettingType>();
  const { setSettingState } = useLayoutContext();
  const [selectedFile, setSelectedFile] = React.useState<string | null>(null);
  React.useEffect(() => {
    setSettingState('Settings');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler<ISettingType> = async (data) => {
    console.log(data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files?.[0]) {
      setSelectedFile(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className='flex justify-center w-full flex-col items-center space-y-2 my-2'>
      {!selectedFile ? (
        <div className='relative w-28 h-28 overflow-hidden bg-gray-600 rounded-full'>
          <Avatar width='26' height='26' className='relative left-0.5 top-3' />
        </div>
      ) : (
        <img
          className='w-28 h-28 rounded-full object-cover p-1'
          src={selectedFile || ''}
          alt='Logo image'
        />
      )}
      <label className='border border-slate-200 p-2 w-44 rounded-lg font-semibold h-12 cursor-pointer flex justify-center'>
        <p className='relative top-1'>Upload New Image</p>
        <Input
          type='file'
          className='hidden'
          onChange={(e) => changeHandler(e)}
        />
      </label>
      <p className='text-gray-600 text-center text-sm'>
        At least 800x800 px recommended. JPG or PNG and GIF is allowed
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {EDIT_PROFILE.map((item) => {
          return (
            <div className='flex flex-col items-center -mb-3' key={item.label}>
              {item.name !== 'phoneNumber' ? (
                <Controller
                  name={item.name as keyof ISettingType}
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
                      className='!w-[300px] md:!w-[550px] input-gradient h-12'
                      label={item.label}
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    />
                  )}
                />
              ) : (
                <Controller
                  name={item.name as keyof ISettingType}
                  control={control}
                  rules={item.rules}
                  render={({ field: { name, value, onChange } }) => (
                    <div className='flex items-center'>
                      <Dropdown />
                      <Input
                        icon={item.icon}
                        name={name}
                        type={item.name}
                        placeholder={item.placeholder}
                        className='!w-[220px] md:!w-[470px] input-gradient h-12 !rounded-none !rounded-r-lg relative bottom-0.5'
                        label={item.label}
                        onChange={onChange}
                        value={value}
                        labelClassName='relative right-20'
                      />
                    </div>
                  )}
                />
              )}
            </div>
          );
        })}

        <div className='flex justify-center'>
          <div>
            <Button
              gradient
              btnText='Save'
              className='text-white w-[300px] md:w-[550px] rounded-lg'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
