const inProgress = document.querySelector('.in-progress')

export function showTask({ task }) {
    const li = document.createElement('li')
    li.classList.add('flex')
    li.classList.add('item-list')

    const div = document.createElement('div')
    div.classList.add('flex')
    div.classList.add('gap-16')

    const taskCreate = document.createElement('p')
    taskCreate.textContent = task
    taskCreate.classList.add('task')

    const imgCheck = document.createElement('img')
    imgCheck.setAttribute('src', `src/assets/icons/check-default.svg`)
    imgCheck.classList.add('img-check')
    
    const imgEdit = document.createElement('img')
    imgEdit.setAttribute('src', 'src/assets/icons/edit.png')
    imgEdit.classList.add('edit-task')
    
    div.append(imgCheck, taskCreate)
    
    li.append(div, imgEdit)
    
    li.addEventListener('click', () => {
        document.querySelectorAll('.item-list').forEach(option => {
            option.style.border = 'none'
            option.classList.remove('item-personalized')
        })

        li.style.border = '2px solid white'
        li.classList.add('item-personalized')
        inProgress.textContent = taskCreate.textContent
    })    

    const id = String(new Date().getTime())
    li.setAttribute('data-id', id)    

    return {
        li
    }
}