import { action, decorate, observable, runInAction } from 'mobx';
import LyricsService from './LyricsService';

function Store() {
  this.name = 'Ali';
  this.sValue = '';
  this.status = '';
  this.lyricsData = '';
  this.LyricsService = LyricsService;

  this.updateName = (name) => {
    this.name = name;
  };

  this.setValue = (val) =>{
    this.sValue = val;
  };

  this.getLyrics = async ({ artist, title }) => {
    try {
      this.status = 'loading';
      const result = await this.LyricsService.get({ artist, title });
      console.log('Result: ',result)
      runInAction(() => {
        this.status = 'done';
        this.lyricsData = result.lyrics;
      });
    } catch (err) {
      runInAction(() => {
        this.status = err;
        this.data = '';
      });
    }
  };
}

decorate(Store, {
  name: observable,
  sValue: observable,
  lyricsData: observable,
  updateName: action,
  setValue: action,
  getLyrics: action,
});

export default new Store();