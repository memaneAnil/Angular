import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAddPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return addition', () => {
    const pipe = new MyAddPipe();
    expect(pipe.transform('MyAddPipe',10,20,30,40,50)).toBe(150);
  });
});
