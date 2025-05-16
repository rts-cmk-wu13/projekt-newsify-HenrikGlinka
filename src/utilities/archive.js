export const getArchive = () => JSON.parse(localStorage.getItem('archive')) ?? {};

export const isArchived = key => getArchive()?.[key] !== undefined;
export const setArchive = content  => Object.keys(content).length === 0 ? localStorage.removeItem('archive') : localStorage.setItem('archive', JSON.stringify(content));

export const addToArchive = article => {
    const archive = getArchive();

    archive[article.url] = article;

    setArchive(archive);
}

export const removeFromArchive =  article => {
    const archive = getArchive();

    delete archive[article.url];
    
    setArchive(archive);
}