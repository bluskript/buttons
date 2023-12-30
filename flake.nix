{
  description = "Quickstart configurations for the Nvim LSP client";

  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system}; in
      {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            nodePackages_latest.pnpm
            nodePackages_latest.typescript-language-server
            nodePackages_latest.prettier
          ];
        };
      }
    );
}
