const InputError: React.FC<{ error: string | undefined }> = ({ error }) => {
  if (!error) return null;

  return (
    <div className='mt-1 ml-2 flex items-center gap-1 text-xs text-red-500'>
      <img
        src={require('../assets/images/attention.png')}
        width={20}
        height={20}
      />
      <p>{error}</p>
    </div>
  );
};

export default InputError;
