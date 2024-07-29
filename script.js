function loadNotebook(notebook) {
    const viewer = document.getElementById('notebookViewer');
    viewer.src = 'html_outputs/notebooks/' + notebook;
}
