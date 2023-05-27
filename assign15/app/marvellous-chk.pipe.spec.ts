import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('create an instance', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe).toBeTruthy();
  });

  it('should check Prime number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform('Prime',31)).toBe("Prime number");
  });
  
  it('should check Perfect number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform('Perfect',28)).toBe("Perfect number");
  });
  
  it('should check Even number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform('Even',31)).not.toBe("Even number");
  });
  it('should check Odd number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform('Odd',31)).toBe("Odd number");
  });
  
});
