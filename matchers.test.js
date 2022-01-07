// toBe匹配器 严格相等,不通过
test('toBe匹配器', () => {
    const a = {number : '007'}
    expect(a).toBe({number : '007'})
})

// toEqual匹配器 内容相等，通过
test('toEqual匹配器', () => {
    const a = {number : '007'}
    expect(a).toEqual({number : '007'})
})

// toBeNull()匹配器只匹配null值，不匹配undefined的值,通过
test('toBeNull匹配器', () => {
    const a = null
    expect(a).toBeNull()
})

// 我们要匹配undefined时，就可以使用toBeUndifined()匹配器
test('toBeUndefined测试',()=>{
    const a = undefined   
    expect(a).toBeUndefined()
}) 

// toBeDefined()匹配器的意思是只要定义过了，都可以匹配成功，例如
test('toBeDefined测试',()=>{
    const a = 'jspang'  
    expect(a).toBeDefined()
}) 

test('toBeTruthy 测试',()=>{
    const a = 0
    expect(a).toBeTruthy()
}) 

test('toBeFalsy 测试',()=>{
    const a = 0
    expect(a).toBeFalsy()
}) 

test('toBeGreaterThan匹配器',()=>{
    const count = 10
    expect(count).toBeGreaterThan(9)
})

test('toBeLessThan匹配器',()=>{
    const count = 10
    expect(count).toBeLessThan(11)
})

// test('toBeGreaterThan匹配器',()=>{
//     const count = 10
//     expect(count).toBeGreaterThan(10)
// })

test('toBeGreaterThanOrEqual匹配器',()=>{
    const count = 10
    expect(count).toBeGreaterThanOrEqual(10)
})

// test('toEqual匹配器',()=>{
//     const one = 0.1
//     const two = 0.2
//     expect(one + two).toEqual(0.3)
// })

test('toBeCloseTo匹配器',()=>{
    const one = 0.1
    const two = 0.2
    expect(one + two).toBeCloseTo(0.3)
})

test('toMatch匹配器',()=>{
    const str="谢大脚、刘英、小红"
    expect(str).toMatch('谢大脚')
})

test('toContain匹配器',()=>{
    const arr=['谢大脚','刘英','小红']
    expect(arr).toContain('谢大脚')
})

const throwNewErrorFunc = ()=>{
    throw new Error('this is a new error')
}

test('toThrow匹配器',()=>{
    expect(throwNewErrorFunc).toThrow()
})