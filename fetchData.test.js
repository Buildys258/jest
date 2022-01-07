import { fetchData } from "./fetchData";

test('fetchData 方法测试', (done) => {
    fetchData((data) => {
        expecet(data).toEqual({
            success: true
        })
    })
    done()
})
