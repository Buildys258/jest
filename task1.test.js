import {baojian1, baojian2} from './task1';

test('测试baojian1', () => {
    expect(baojian1(300)).toBe('好')
})

test('测试baojian2', () => {
    expect(baojian2(3099)).toBe('双人')
})