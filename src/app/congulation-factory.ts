import { WordConjugator } from "./word-conjugator";

abstract class CongulationFactory {
  public abstract Create(): WordConjugator;
}
