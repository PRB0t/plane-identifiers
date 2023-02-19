/** Planes info. */
type PlanesInfo = {
    ICAOs: string[];
};
/**
 * Plane identifiers object type.
 */
interface PlaneIdentifiers {
    [entity: string]: PlanesInfo;
}
declare const _default: PlaneIdentifiers;
export default _default;
