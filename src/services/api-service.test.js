import axios from 'axios';
 
import { apiService } from "../services";
 
jest.mock('axios');
 
describe('getPostDetail', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
        id: 12154,
        title: "Darth Vader Asks Mom for Allowance Raise",
        text: "In yet another move bound to mark the demise of the Galactic Empire, the once powerful Jedi-gone-rogue has begun taking drastic measures to continue funding the second Death Star. Already months late, the latest enterprise of Darth Sidious's right hand is in danger of being sold at an upcoming scrap metal auction on Tataouine later this year. When asked for comment, Mr. Skywalker seemed to be short of breath...",
        timestamp: "2021-07-19T20:50:33.178Z"
        };
 
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
 
    await expect( apiService.getPostDetail(12154)).resolves.toEqual(data);
  });
 
  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
 
    await expect(apiService.getPostDetail(12154)).rejects.toThrow(errorMessage);
  });
});