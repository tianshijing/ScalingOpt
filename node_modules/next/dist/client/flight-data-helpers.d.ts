import type { FlightRouterState } from '../server/app-render/types';
/**
 * This function is used to prepare the flight router state for the request.
 * It removes markers that are not needed by the server, and are purely used
 * for stashing state on the client.
 * @param flightRouterState - The flight router state to prepare.
 * @param isHmrRefresh - Whether this is an HMR refresh request.
 * @returns The prepared flight router state.
 */
export declare function prepareFlightRouterStateForRequest(flightRouterState: FlightRouterState, isHmrRefresh?: boolean): string;
