
/**
 * Utility functions for testing server connections
 */

export interface ConnectionTestResult {
  success: boolean;
  message: string;
  timestamp: string;
}

/**
 * Test connection to a server
 * @param url The server URL to test
 * @returns Promise with connection test result
 */
export const testServerConnection = async (url: string): Promise<ConnectionTestResult> => {
  try {
    const startTime = Date.now();
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
      cache: 'no-cache',
    });
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    if (response.ok) {
      return {
        success: true,
        message: `Connection successful (${responseTime}ms)`,
        timestamp: new Date().toISOString(),
      };
    } else {
      return {
        success: false,
        message: `Connection failed with status: ${response.status} ${response.statusText}`,
        timestamp: new Date().toISOString(),
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Connection error: ${error instanceof Error ? error.message : String(error)}`,
      timestamp: new Date().toISOString(),
    };
  }
};
