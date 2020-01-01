#!/bin/bash

echo "----- prerun (dev) -------"

# Create a version from git commit
./scripts/get_git_revision.py

# Create adocs and build book index
./scripts/adoc_from_bookcovers.py

echo "----- end prerun (dev) -------"
