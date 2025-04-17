import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: function(id) {
      return async function ({get}){
        await new Promise(r=>setTimeout(r,3000));
        const res = await axios.get(`http://localhost:8080/todo?id=${id}`);
          if (!res.data.todo) {
            throw new Error("Todo not found");
          }
          return res.data.todo;

      }
    },
  })
});