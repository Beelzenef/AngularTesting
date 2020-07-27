import { DateService } from "./date-service";

describe("DateService", () => {
  let service: DateService;

  beforeEach(() => {
    service = new DateService();
  });

  it("should return all days", () => {
    var result = service.getDays();
    expect(result.length).toEqual(7);
  });

});