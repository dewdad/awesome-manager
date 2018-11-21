import FileModel from '../File'

describe('@/api/models/File', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new FileModel();

    expect(model.fileName).toBe("1.jpg");
  })

  it('expect string field', ()=> {
    expect(new FileModel({}).fileName).toBe("1.jpg");
    expect(new FileModel({ fileName: "1.jpg" }).fileName).toBe("1.jpg");
    expect(new FileModel({ fileName: 1 }).fileName).toBe("1");
    expect(new FileModel({ fileName: true }).fileName).toBe("true");
    expect(new FileModel({ fileName: null }).fileName).toBe("null");
  })

  it('expect to json', ()=> {
    const model = new FileModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      fileName: "1.jpg"
    };

    expect(json).not.toBeInstanceOf(FileModel);
    expect(json.fileName).toEqual(expected.fileName);
  })
})


