export const audio = new Audio(null);

if (!localStorage.getItem('likes')) {
	localStorage.setItem('likes', JSON.stringify([]));
}
