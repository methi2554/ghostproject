export const state = () => ({
    blogData: []
})



export const mutations = {
    setBlog(state , newData){
        state.blogData = ''
        state.blogData = newData
    }
}