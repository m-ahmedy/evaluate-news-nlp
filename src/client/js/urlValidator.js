function checkValidUrl(inputText) {
    console.log("::: Running checkValidUrl :::", inputText);
    const expression = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    const regex = new RegExp(expression)

    return !!inputText.match(regex)
}

export { checkValidUrl }
