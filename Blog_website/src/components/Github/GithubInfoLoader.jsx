export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sumit-bhola')
    return response.json()
}