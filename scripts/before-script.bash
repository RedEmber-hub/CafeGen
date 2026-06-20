#!/usr/bin/env bash
set -e -u -o pipefail

# === ГРУППИРОВКА ЛОГОВ ===
if [[ -n "${CI-}" ]]; then
  echo "::group::🔧 Setting up environment"
fi

# === ИЗОЛЯЦИЯ СОСТОЯНИЯ ===
projectDir="${GITHUB_WORKSPACE:-$PWD}"
buildDir="$projectDir/.build"
homeDir="$buildDir/home"
tempDir="$buildDir/tmp"
cacheDir="$buildDir/cache"
mkdir -p -- "$homeDir" "$tempDir" "$cacheDir"

# === ИНФОРМАЦИЯ ОБ ОКРУЖЕНИИ ===
echo "📂 Project dir: $projectDir"
echo "🟢 Node: $(node --version)"
echo "📦 NPM: $(npm --version)"

# === ЗАВЕРШЕНИЕ ГРУППЫ ===
if [[ -n "${CI-}" ]]; then
  echo "::endgroup::"
fi

# === ЭКСПОРТ ПЕРЕМЕННЫХ ДЛЯ СЛЕДУЮЩИХ ШАГОВ ===
if [[ -n "${GITHUB_ENV-}" ]]; then
  {
    echo "BUILD_DIR=$buildDir"
    echo "CACHE_DIR=$cacheDir"
    echo "HOME=$homeDir"
    echo "TMPDIR=$tempDir"
  } >> "$GITHUB_ENV"
  echo "✅ Environment variables exported"
fi