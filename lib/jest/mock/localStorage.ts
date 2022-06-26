const mockLocalStoarge = () => {
  const store: { [key: string]: any } = {};
  const localStorage = {
    getItem: (key: string): string | null => {
      return store[key] ?? null;
    },
    setItem: (key: string, value: any) => {
      store[key] = value.toString();
    }
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorage
  });
};

export default mockLocalStoarge;
