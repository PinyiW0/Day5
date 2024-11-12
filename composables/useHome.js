export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  const getList = async() => {
    const url = `https://nuxr3.zeabur.app/api/v1/home/news/`;
    isLoading.value = true;
    try {
      const res = await fetch(url);
      if(res.ok){
        const { result } = await res.json();
        newsList.value = result;
        isLoading.value = false;
        return;
      } 
      throw new Error(`錯誤： ${res.status}`);
    } catch(err){
      if (import.meta.client){
        alert(`Error: ${error.message}`);
      } else {
        console.error(`Error fetching news: ${error.message}`);
      }
      isLoading.value = false;
    }
  }
  return { newsList, isLoading, getList};
};
