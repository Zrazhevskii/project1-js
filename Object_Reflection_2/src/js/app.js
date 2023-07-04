export default function attackOptions(obj) {
    const { special } = obj;
    const result = [];
    special.forEach((elem) => {
          const {
            id, name, icon, description = 'Описание недоступно',
          } = elem;
          result.push({
            id, name, icon, description,
          });
    });
    return result;
}
