import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Article {
  title: string;
  description: string;
  urlToImage: string;
}

interface NewsState {
  articles: Article[];
  loading: boolean;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setNews, setLoading } = newsSlice.actions;
export default newsSlice.reducer;
