import { checkValidUrl } from './urlValidator'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (checkValidUrl(formText)) {
        fetch('http://localhost:8081/test', {
            method: 'POST',
            body: JSON.stringify({ formText }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(result => {
            console.log('Result:', result);

            document.getElementById('agreement').innerHTML = result.agreement
            document.getElementById('confidence').innerHTML = result.confidence
            document.getElementById('irony').innerHTML = result.irony
            document.getElementById('score').innerHTML = result.score_tag
            document.getElementById('subjectivity').innerHTML = result.subjectivity
        })
    } else {
        alert('Please enter valid url')
    }
}

export { handleSubmit }
