import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return mult', () => {
    const pipe = new MyMultPipe();
    expect(pipe.transform('MyMultPipe',1,2,3,4,5)).toBe(120);
  });
});
