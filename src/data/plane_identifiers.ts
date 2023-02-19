/**
 * @file Makes sure the plane identifiers database is strongly typed.
 */
import planeIdentifiers from "./plane_identifiers.json";

/** Planes info. */
type PlanesInfo = { ICAOs: string[] };

/**
 * Plane identifiers object type.
 */
interface PlaneIdentifiers {
  [entity: string]: PlanesInfo;
}

export default planeIdentifiers as PlaneIdentifiers;
