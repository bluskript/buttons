{
  description = "Quickstart configurations for the Nvim LSP client";

  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system}; in
      {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodePackages_latest.pnpm
            nodejs
            nodePackages_latest.typescript-language-server
          ];
        };
      }
    );
}
